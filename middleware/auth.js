export default function ({ store, redirect }) {
  if (!store.getters['user/token']) {
    return redirect('/login')
  }
}
