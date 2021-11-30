export default ({ route, redirect, $can }) => {
  const requiredPermissions = route.meta[0].permissions
  const canEnter = $can(requiredPermissions)

  if (!canEnter) {
    return redirect('/dashboard')
  }
}
