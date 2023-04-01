<template>
    <h1>Sign in to an existing account</h1>
    <p><input type="text" placeholder="Email Address" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p v-if="errorMsg">{{errorMsg}}</p>
    <p><button @click="register">Sign In</button></p>
</template>

<script setup>
    import { ref } from 'vue';
    import router from '../router';
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    const email = ref('');
    const password = ref('');
    const errorMsg = ref();
    //const router = useRouter();
    const register = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push('/dashboard');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                switch(errorCode) {
                    case 'auth/invalid-email':
                        errorMsg.value = 'Invalid email address';
                        break;
                    case 'auth/user-disabled':
                        errorMsg.value = 'User disabled';
                        break;
                    case 'auth/user-not-found':
                        errorMsg.value = 'User not found';
                        break;
                    case 'auth/wrong-password':
                        errorMsg.value = 'Wrong password';
                        break;
                    default:
                        errorMsg.value = 'Unknown error';
                }
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