import axios from 'axios';

const getHomePageContent = () => {
    return (
        axios.get(`${process.env.REACT_APP_API_URL}/homeContent`)
            .then((response) => {
                return response.data[0].acf;
            })
            .catch(err => console.log('>>error', err))
    )
};

const getPerformanceSectionContent = () => {
    return (
        axios.get(`${process.env.REACT_APP_API_URL}/sportPerformance`)
            .then((response) => {
                return response.data[0].acf;
            })
            .catch(err => console.log('>>error', err))
    )
};

export {
    getHomePageContent,
    getPerformanceSectionContent,
}