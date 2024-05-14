import axios from "axios";

const axios = require('axios');

//const apiUrl = 'https://api.sportradar.com/soccer/trial/v4/en/seasons/sr%3Aseason%3A113943/competitors.json?api_key=o4FFngW73VpSgSoIadrB8seMLGUwvok1n5HNY8Zc';

async function pegartimes() {
    try {
      const response = await axios.get("https://localhost:8000/api/soccer");
      const teams = response.data.competitors;
      return teams.map(team => team.name);
    } catch (error) {
      console.error('Erro ao obter os times:', error);
      return [];
    }
  }

  async function mostrasrtimes() {
    const teams = await fetchTeams();
    const teamsList = document.getElementById('teams-list');
    
    teams.forEach(team => {
      const listItem = document.createElement('li');
      listItem.textContent = team;
      teamsList.appendChild(listItem);
    });
  }
  
  // Chame a função para exibir os times quando a página carregar
  window.onload = mostrasrtimes;
  
