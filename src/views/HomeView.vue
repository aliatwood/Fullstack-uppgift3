<template>
    <main>
        <h1>Welcome to Middle Earth</h1>

        <section class="hero">
            <h2 class="hero-title">Explore the World of Tolkien</h2>

            <img class="hero-img" src="/images/middle earth.jpg" alt="Picture of Middle Earth">

            <p class="hero-paragraph">Explore the magical world of Middle-earth, the land of The Lord of the Rings. Discover iconic places such as the Shire, Rivendell, Mordor and Minas Tirith. Follow the journey of the Fellowship and explore the world of J.R.R. Tolkien through this interactive map.</p>

            <RouterLink class="goto-btn" to="/places">Explore Places</RouterLink>
        </section>
    </main>
</template>

<style scoped>
.hero-img{
    max-width: 850px;
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 16px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
}

h1{
    text-align: center;
    padding-bottom: 10px;
}

section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.hero-title{
    text-align: center;
}

.hero-paragraph{
    max-width: 30em;
    text-align: center;
    font-size: 1.4rem;
}

.goto-btn{
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: #263D2B;
    color: #E8E2D2;
    border-radius: 6px;
    text-decoration: none;
}

.goto-btn:hover{
    background-color: #38553D;
}

@media (max-width: 1023px){
  .hero-paragraph{
    font-size: 1.2rem;
    max-width: 90%;
  }

  .hero-title{
    font-size: 1.4rem;
  }
}

@media (max-width: 600px){
  main{
    max-width: 95%;
  }

  h1{
    font-size: 1.6rem;
  }

  .hero-title{
    font-size: 1.2rem;
  }

  .hero-paragraph{
    font-size: 1rem;
  }

  .goto-btn{
    padding: 12px 18px;
  }
}
</style>