import ITagsObject from '../entities/ITagsObject'
import axios from 'axios'


const queryRoute = "https://api.stackexchange.com/2.3/tags"

export const fetchTags = async (queryKeys = "page=1&pagesize=10&order=asc&sort=activity&site=stackoverflow"): Promise<ITagsObject | Error> => {
    const queryPath = queryRoute + '?' + queryKeys;
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
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return Error(error.message);
        } else {
          console.log('unexpected error: ', error);
          return Error('An unexpected error occurred');
        }
      }
};