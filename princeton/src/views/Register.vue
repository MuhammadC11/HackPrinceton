<template>
    <h1>Create an account</h1>
    <p><input type="text" placeholder="Email Address" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Sign Up</button></p>
</template>

<script setup>
    import { ref } from 'vue';
    import router from '../router';
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    const email = ref('');
    const password = ref('');
    //const router = useRouter();
    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push('/dashboard');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
</script>


<style>
    h1 {
        text-align: center;
    }
    p {
        text-align: center;
    }
    button {
        text-align: center;
    }
</style>