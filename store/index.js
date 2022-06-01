const actions = {
    async onAuthStateChangedAction(state, { authUser, claims }) {
        if (!authUser) {
            state.commit('SET_USER', null)
            this.$router.push({
                path: '/admin',
            })
        } else {
            const { uid, email } = authUser
            state.commit('SET_USER', {
                uid,
                email,
            })
        }
    },

    async setConsults({ commit }) {
        try {
            let consults = [];
            const fsDb = await this.$fire.firestore.collection("Consults").get();
            fsDb.forEach(consult => {
                consults.push(consult.data());
            });

            commit('SET_CONSULTS', consults)

        } catch (err) {
            console.error(err);
        }
    },

    async getModels({ commit }) {
        try {
            let models = [];
            const fsDb = await this.$fire.firestore.collection("Models").get();
            fsDb.forEach(model => {
                models.push(model.data());
            });

            commit('GET_MODELS', models)

        } catch (err) {
            console.error(err);
        }
    }

}

const mutations = {
    SET_USER(state, user) {
        state.user = user
    },
    SET_CONSULTS(state, consults) {
        state.consults = consults
    },
    GET_MODELS(state, models) {
        state.models = models
    }
}

const state = () => ({
    user: null,
    consults: [],
    models: []
})

const getters = {
    getUser(state) {
        return state.user
    },
    getConsults(state) {
        return state.consults
    },
}

export default {
    state,
    actions,
    mutations,
    getters,
}
