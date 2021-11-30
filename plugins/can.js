export default ({ store }, inject) => {
  const can = (permissions) => {
    const userPermissions = store.state.auth.user.permissions
    let canEnter = false

    if (!userPermissions || !permissions) {
      return canEnter
    }

    if (!Array.isArray(permissions)) {
      canEnter = userPermissions.includes(permissions)
    } else {
      permissions.forEach((permissions) => {
        if (userPermissions.includes(permissions)) {
          canEnter = true
        }
      })
    }

    return canEnter
  }

  inject('can', can)
}
