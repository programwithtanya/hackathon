let teams = [
    { id: 1, name: 'Team A', members: ['John Doe', 'Jane Doe'], projects: ['Project 1', 'Project 2'] },
    { id: 2, name: 'Team B', members: ['Alice Smith', 'Bob Smith'], projects: ['Project 3'] },
    { id: 3, name: 'Team C', members: ['Ella Johnson', 'Mike Johnson'], projects: ['Project 4'] },
    // Add more teams here if needed
  ];
  
  function renderTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
  
    teams.forEach((team, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>${team.members.join(', ')}</td>
        <td>${team.projects.join(', ')}</td>
        <td>
          <button onclick="editTeam(${team.id})">Edit</button>
          <button onclick="deleteTeam(${team.id})">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  function addTeam() {
    const teamName = prompt('Enter team name:');
    if (teamName) {
      const newTeam = {
        id: teams.length + 1,
        name: teamName,
        members: [],
        projects: []
      };
      teams.push(newTeam);
      renderTable();
    }
  }
  
  function editTeam(teamId) {
    const teamIndex = teams.findIndex(team => team.id === teamId);
    if (teamIndex !== -1) {
      const newName = prompt('Enter new team name:', teams[teamIndex].name);
      if (newName) {
        teams[teamIndex].name = newName;
        renderTable();
      }
    }
  }
  
  function deleteTeam(teamId) {
    const confirmDelete = confirm('Are you sure you want to delete this team?');
    if (confirmDelete) {
      teams = teams.filter(team => team.id !== teamId);
      renderTable();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderTable();
  
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredTeams = teams.filter(team => team.name.toLowerCase().includes(searchTerm));
      const tbody = document.querySelector('tbody');
      tbody.innerHTML = '';
      filteredTeams.forEach((team, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${team.name}</td>
          <td>${team.members.join(', ')}</td>
          <td>${team.projects.join(', ')}</td>
          <td>
            <button onclick="editTeam(${team.id})">Edit</button>
            <button onclick="deleteTeam(${team.id})">Delete</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    });
  });
  
  