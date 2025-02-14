import { useState, useEffect } from "react";
import axiosClient from "../Axios/axiosClient";

const Leagues = () => {
  const [availableLeagues, setAvailableLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const urlEndPoint = "/products";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axiosClient.get(urlEndPoint);
        setAvailableLeagues(response.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Log full error object for debugging

        if (error.response) {
          console.error("Response headers:", error.response.headers);
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          setError(
            `Error: ${error.response.status} - ${
              error.response.data?.message || "Failed to load data"
            }`
          ); // More informative error message
        } else if (error.request) {
          console.error("Request made but no response received", error.request);
          setError("Error: No response received");
        } else {
          console.error("Error setting up the request", error.message);
          setError(`Error: ${error.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [urlEndPoint]); // Add API_URL to the dependency array

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      // Display error message
      <div>
        <p>Too bad something went wrong</p>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div>
      {availableLeagues.length > 0 ? (
        <ul>
          {availableLeagues.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>No data to show</p>
      )}
    </div>
  );
};

export default Leagues;
