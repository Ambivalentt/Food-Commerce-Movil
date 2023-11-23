
export class Storage {
    static add(key:string, value:any) {
        try {
            const store = JSON.stringify(value)
            localStorage.setItem(key, store)
        } catch {
            return null
        }
    }

    static get(key:any) {
        try {
            const store = localStorage.getItem(key)
            return store ? JSON.parse(store) : null
        } catch {
            return null
        }
    }
    static remove (key:any) {
        if(key) return localStorage.removeItem(key)
        localStorage.clear()
    }
}