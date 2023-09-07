
// Добавить в КОНТЕКСТ??? const [tea, setPuer] = useState([])
// Хранить данные в контексте, Тут иъ просто выводить?
// Можно на пряму. указывать в роутинге loade перемменную с данными
export function fetchTea(){
    const response = fetch (
    'https://647f25e6c246f166da903167.mockapi.io/tea'
    ).then((response) => response.json())
    return(response ? response : null)
}