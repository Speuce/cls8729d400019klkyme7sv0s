 useEffect(() => {
   axios.get('/getCounter')
     .then(res => {
       setCounter(res.data);
     })
     .catch(err => console.log(err));
 }, []);