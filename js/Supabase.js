// Importar o módulo createClient do arquivo JS
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Configuração do Supabase
const supabaseUrl = 'https://oqlkznbuefxvmycigqql.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xbGt6bmJ1ZWZ4dm15Y2lncXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTk5MzQsImV4cCI6MjAyMTQzNTkzNH0.JD8OroYxDYTDcRD-moNnWeV5gRemUzqjAP8k1bHTnx8';

const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const userEmail = emailInput.value;

        try {
            await signInWithEmail(userEmail);
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
        }
    });

    async function signInWithEmail(email) {
        const { error } = await supabase.auth.signIn({
            email,
        });

        if (error) {
            throw new Error('Erro ao fazer login: ' + error.message);
        } else {
            console.log('Login bem-sucedido!');
            // Redirecionar para outra página, se necessário
        }
    }

    async function signUpNewUser() {
        const { data, error } = await supabase.auth.signUp({
            email: 'example@email.com',
            password: 'example-password',
            options: {
                emailRedirectTo: 'https://example.com/welcome',
            },
        });

        if (error) {
            throw new Error('Erro ao registrar usuário: ' + error.message);
        } else {
            console.log('Usuário registrado com sucesso!');
            // Redirecionar para outra página, se necessário
        }
    }
});
