export async function getProjects() {
    const response = await fetch("http://localhost:3000/projects");
    if (!response.ok) {
        throw { message: "Failed to fetch projects", status: 500 }
    }
    return response.json()
}