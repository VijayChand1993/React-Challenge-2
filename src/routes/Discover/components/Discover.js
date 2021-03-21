import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import axiosInstance from './../../../helpers/axios';
import refresh from './../../../helpers/axiosRefresh';


export default function Discover() {

  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    refresh.then(function (response) {
      axiosInstance.get('/new-releases').then(function (response) {
        setNewReleases(response.data.albums.items);
      })
        .catch(function (error) {
          console.log(error);
        });
    })


    axiosInstance.get('/featured-playlists').then(function (response) {
      setPlaylists(response.data.playlists.items);
    })
      .catch(function (error) {
        console.log(error);
      });

    axiosInstance.get('/categories').then(function (response) {
      setCategories(response.data.categories.items);
    })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
    </div>
  )
}
