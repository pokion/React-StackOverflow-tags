import ITagsObject from '../entities/ITagsObject'
import axios from 'axios'

const queryRoute = "https://api.stackexchange.com/2.3/tags";
const filterTotal = '&filter=!nNPvSNVZJS'

export const fetchTags = async (queryKeys = "page=1&pagesize=10&order=asc&sort=activity&site=stackoverflow"): Promise<ITagsObject> => {
    const queryPath = queryRoute + '?' + queryKeys + filterTotal;
    try{
        const { data } = await axios.get<ITagsObject>(
            queryPath,
            {
              headers: {
                Accept: 'application/json',
              },
            },
        )
        return data;
    } catch (error) {
      throw error
    }
};