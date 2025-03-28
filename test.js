export async function fetchData(){
    const response = await fetch("http://localhost:9876/numbers/e");
    return await response.json();
}