<template>
  <div id="roles">
    <v-data-table
      :headers="headers"
      :items="roles"
      class="elevation-1"
      loading-text="Loading... Please wait"
      :loading="loadingTable"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>Users</v-toolbar-title>
          <v-divider class="mx-4" inset vertical />
          <v-spacer />
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                fab
                color="cyan"
                dark
                small
                v-on="on"
                @click="dialogRole = true"
              >
                <v-icon small>
                  mdi-account-tie
                </v-icon>
              </v-btn>
            </template>
            <span>New Role</span>
          </v-tooltip>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">
                Are you sure you want to delete this item?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                  OK
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template #[`item.permissions`]="{ item }">
        <span v-for="(permission, i) in item.permissions" :key="i" class="mr-1">
          <v-chip color="#4cb6cd" class="my-1">
            {{ permission.slug }}
          </v-chip>
        </span>
      </template>
      <template #[`item.actions`]="{ item }">
        <v-icon small class="mr-1" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-dialog v-model="dialogRole" max-width="800px">
      <v-card class="text-center">
        <v-btn class="float-right" icon @click="dialogRole = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="mb-5">
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-form
            id="roleForm"
            ref="roleForm"
            v-model="roleValid"
            lazy-validation
            class="mx-4 mt-5"
            @submit.prevent="save"
          >
            <v-text-field
              v-model="editedItem.name"
              class="my-4"
              label="Role"
              prepend-inner-icon="mdi-account-tie"
              :rules="[...rules.requiredRules]"
              autofocus
            />

            <v-combobox
              v-model="editedItem.permissions"
              :items="permissions"
              item-text="name"
              chips
              clearable
              label="Select Permission"
              multiple
              prepend-inner-icon="mdi-account-tie-voice"
            >
              <template #selection="{ attrs, item, select, selected }">
                <v-chip
                  :close="editedIndex === -1"
                  v-bind="attrs"
                  :input-value="selected"
                  @click="select"
                  @click:close="remove(item)"
                >
                  <strong>{{ item.name }}</strong>&nbsp;
                </v-chip>
              </template>
            </v-combobox>
          </v-form>
          <v-btn
            rounded
            color="cyan"
            dark
            min-width="100"
            width="100%"
            max-width="280"
            class="mb-6"
            :loading="loadingRole"
            type="submit"
            form="roleForm"
          >
            <v-icon left dark>
              mdi-account-check
            </v-icon>
            Save Role
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    dialogRole: false,
    loadingRole: false,
    loadingTable: true,
    roleValid: true,
    headers: [
      { text: 'Role', value: 'name' },
      { text: 'Permissions', value: 'permissions' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    editedItem: {
      id: 0,
      name: '',
      permissions: []
    },
    editedIndex: -1,
    rules: {
      requiredRules: [v => !!v || 'This field is required']
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Role' : 'Edit Role'
    },
    ...mapGetters('accounts', {
      roles: 'roles',
      permissions: 'permissions'
    })
  },

  watch: {
    dialogRole (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.loadingTable = true
      this.$store
        .dispatch('accounts/getRoles')
        .then(() => {
          this.loadingTable = false
        })
        .catch((err) => {
          this.$alert.show({
            type: 'error',
            text: err.response.data.message
          })
          this.loadingTable = false
        })
    },

    editItem (item) {
      this.editedIndex = this.roles.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogRole = true
    },

    deleteItem (item) {
      this.editedIndex = this.roles.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.roles.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        this.$axios.put(`roles/${this.editedItem.id}`, { name: this.editedItem.name, permissions: this.slugs(this.editedItem.permissions) })
          .then((res) => { console.log(res) })
          .catch((err) => { console.log(err) })
      } else {
        this.roles.push(this.editedItem)
      }
    },
    remove (item) {
      this.editedItem.permissions.splice(this.editedItem.permissions.indexOf(item), 1)
      this.editedItem.permissions = [...this.editedItem.permissions]
    },
    slugs (item) {
      return item.map(x => x.slug)
    }
  }
}
</script>

<style>
</style>
