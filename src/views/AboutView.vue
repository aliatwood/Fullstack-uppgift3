<template>
  <main>
    <h1>Om projektet</h1>

    <section>
      <h2>Mina erfarenheter av Vue.js</h2>

      <p>
        Jag började projektet med att installera Vue.js med hjälp av Vite. Installationen gick ganska smidigt och jag använde Visual Studio Code för att skriva min kod.
      </p>

      <p>
        Hittills har det varit roligt att arbeta med Vue. Jag gillar att man kan dela upp projektet i mindre komponenter, till exempel Navbar och Footer. Det gör koden lättare att organisera och förstå.
      </p>

      <p>
        Något jag tyckte var lite svårt i början var att förstå hur Vue Router fungerar och hur man kopplar ihop olika vyer. Jag behövde också vänja mig vid hur komponenter fungerar i Vue.
      </p>

      <p>
        Överlag tycker jag att det har gått bra att komma igång med Vue. Jag har lärt mig mycket under arbetets gång och kan absolut tänka mig att arbeta mer med Vue.js i framtiden.
      </p>
    </section>
    
  </main>
</template>

<style scoped>
main{
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
}

h1{
  text-align: center;
  color: #263D2B;
  padding-bottom: 15px;
}

h2{
  text-align: center;
  color: #263D2B;
  margin-bottom: 10px;
}

p{
  color: #292820;
  line-height: 1.6;
  margin-bottom: 15px;
  max-width: 35em;
  font-size: 1.1rem;
}

@media (max-width: 1023px){
  main{
    max-width: 90%;
  }

  p{
    max-width: 40em;
  }
}

@media (max-width: 600px){
  main{
    max-width: 95%;
    padding: 15px 10px;
  }

  h1{
    font-size: 1.5rem;
  }

  h2{
    font-size: 1.2rem;
  }

  p{
    font-size: 1rem;
    max-width: 100%;
  }
}

</style>