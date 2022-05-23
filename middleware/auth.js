export default function ({ app, route, redirect }) {
    if (route.path === '/admin/panel') {
        if (!app.$fire.auth.currentUser) {
            return redirect('/admin')
        }
    }
}
