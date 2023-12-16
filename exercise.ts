interface Customer {
    id: number;
    name: string;
    isGold: boolean;
    email: string;
}

async function performComputation(){
    try{
        const customer: Customer = await getCustomer(1);

        console.log('Customer: ', customer);

        if(customer.isGold){
            const topMovies : String[] = await getTopMovies();

            console.log('Top movies: ', topMovies);

            await sendEmail(customer.email, topMovies);

            console.log('Email sent... ')
        }
        
    }catch(err){  
        console.log(`Computation finished with an error ${err}`);
    }
}

performComputation();

function getCustomer(id : number) : Promise<Customer> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: 'Bamidele Ajewole',
          isGold: true,
          email: 'email'
        });
      }, 4000);
    });
  }
  

function getTopMovies() : Promise<String[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['movie1', 'movie2']);
      }, 4000);
    });
  }
  

function sendEmail(email : String, movies : String[]) : Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
  }
  
