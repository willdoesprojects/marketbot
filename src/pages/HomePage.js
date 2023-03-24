import SearchBar from '../components/SearchBar';
import SearchData from '../SearchData.json'
function HomePage() {
    return(
        <SearchBar placeholder = "Find your cheapest groccery!" data = {SearchData}/>
    );
}

export default HomePage;