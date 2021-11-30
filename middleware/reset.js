export default function ({ route, redirect }) {
  if (!route.query.token) {
    redirect('/login')
  }
}