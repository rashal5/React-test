import React from 'react'

function Checkwether() {
    const [Cityname,setTextContent] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    
    const handleTextChange = (e) => {
        setInputText(e.target.value);
    };

    const applyText = () => {
        setTextContent(Cityname);
        
    };
  



  useEffect(() => {
    const v = Cityname
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=India&appid=ef3dd40baef7d4b77d137ab2cf46ed38')
      .then(response => {
        setEmployees(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }
  return (
    <div>
      <label htmlFor="inputText">ENTER THE TEXT</label>
                        <input
                        type="text"
                        className="textarea"
                        id="inputText"
                        name="inputText"
                        placeholder="put text here"
                        value={Cityname}
                        onChange={handleTextChange}
                    />
                    <button onClick={applyText}>Apply</button><br />

        <ul>
          <li key={data.weather}>
            {weather.main} - {weather.description}
          </li>

          <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.first_name} - {employee.phone_number}
          </li>
        ))}
      </ul>
      
      </ul>

    </div>
  )
}

export default Checkwether