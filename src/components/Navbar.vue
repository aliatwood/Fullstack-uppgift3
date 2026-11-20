<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
    <nav>
        <img src="/logo.png" alt="Bild på LOTR ringen">
        <div class="nav-links">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/places">Places</RouterLink>
            <RouterLink to="/about">About</RouterLink> 
        </div>      
    </nav>
</template>

<style scoped>
nav{
    background-color: #263D2B;
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    align-items: center;
}

.nav-links{
    display: flex;
    gap: 30px;
    width: 60%;
    justify-content: center;
}

nav a{
    color: #E8E2D2;
    font-size: 1.5rem;
    text-decoration: none;
}

nav a:hover{
    color: #c0bbac;
    box-shadow: 0 4px 12px rgba(226, 213, 65, 0.721);
}

img{
    width: 60px;
    height: 60px;
    object-fit: contain;
}

@media (max-width: 1023px){
  .nav-links{
    width: 70%;
    gap: 20px;
  }

  nav a{
    font-size: 1.2rem;
  }
}

@media (max-width: 600px){
  nav{
    flex-direction: column;
    gap: 15px;
  }

  .nav-links{
    width: 100%;
    gap: 20px;
  }

  nav a{
    font-size: 1rem;
  }

  img{
    width: 50px;
    height: 50px;
  }
}
</style>