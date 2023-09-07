
export function fetchDishes(){
    // Добавить в КОНТЕКСТ??? const [tea, setPuer] = useState([])
    const response = fetch (
        'https://647f25e6c246f166da903167.mockapi.io/dishes'
    ).then((response) => response.json())
    return(response ? response : null)
}