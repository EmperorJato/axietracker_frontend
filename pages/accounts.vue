<template>
  <div id="accounts">
    <v-container fluid>
      <v-card>
        <v-tabs v-model="tab" right>
          <v-tab href="#users">
            Users
          </v-tab>
          <v-tab href="#roles">
            Roles
          </v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item value="users">
              <Users />
            </v-tab-item>
            <v-tab-item value="roles">
              <Roles />
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Users from '~/components/accounts/Users.vue'
import Roles from '~/components/accounts/Roles.vue'
export default {
  name: 'Accounts',
  components: {
    Users,
    Roles
  },
  layout: 'user',
  middleware: ['permissions'],
  meta: {
    permissions: ['view-accounts', 'create-accounts', 'edit-accounts', 'delete-accounts']
  },
  data: () => ({
    tab: null
  }),
  head () {
    return {
      title: 'Accounts'
    }
  }
}
</script>

<style>
</style>
