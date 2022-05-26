import { useEffect, useState } from 'react'
const ACCESS_KEY = process.env.ACCESS_KEY

const baseUrl = 'https://api.unsplash.com/search/photos?page=1&orientation=portrait&query'

const useUnsplash = () => {
  const [img, setImg] = useState('')
  const [res, setRes] = useState([])
  useEffect(() => {
    fetchRequest();
  }, []);
}

const fetchRequest = async () => {
  const data = await fetch(
    `${baseUrl}=${img}&client_id=${ACCESS_KEY}`
  );
  const dataJ = await data.json();
  const result = dataJ.results;
  console.log(result);
  setRes(result);
};
// TODO: Darle una repensada a ver como lo hacemos