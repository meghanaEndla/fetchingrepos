function fetchRepositories() {
    const username = document.getElementById('username').value;
    const repositoriesDiv = document.getElementById('repositories');
    repositoriesDiv.innerHTML = 'Fetching repositories...';

    // Use the Github API to fetch user repositories
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repositories => {
            repositoriesDiv.innerHTML = ''; // Clear previous content

            if (repositories.length === 0) {
                repositoriesDiv.innerHTML = 'No repositories found for the given user.';
            } else {
                repositories.forEach(repo => {
                    const repoDiv = document.createElement('div');
                    repoDiv.innerHTML = `<strong>${repo.name}</strong> - ${repo.description || 'No description available'}`;
                    repositoriesDiv.appendChild(repoDiv);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            repositoriesDiv.innerHTML = 'Error fetching repositories. Please try again.';
        });
}