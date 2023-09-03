import axios from "axios";
import usePromise from "../usePromise";
import { func } from "prop-types";
import {
  ACCESS_TOKEN,
  GIT_FOLDER,
  GIT_REPOSITY,
  GIT_USER_NAME,
} from "../../../gitconfig";

const defaultUrl = process.env.GATSBY_API_URL || "https://status.joystream.app";

export default function useAxios(url = defaultUrl) {
  const [response, loading, error] = usePromise(() => axios.get(url));

  if (loading && !error) {
    return [null, loading, null];
  } else if (error) {
    console.log(error);
    return [null, false, error];
  }

  const { data } = response;
  return [data, false, null];
}

export function useGetFileName() {
  const [response, loading, error] = usePromise(() => {
    return axios.get(
      `https://api.github.com/repos/${GIT_USER_NAME}/${GIT_REPOSITY}/contents/${GIT_FOLDER}`
      // {
      //   headers: {
      //     Authorization: `token ${ACCESS_TOKEN}`,
      //   },
      // }
    );
  });

  if (loading && !error) {
    return [null, loading, null];
  } else if (error) {
    return [null, false, null];
  }

  const files = response.data.filter((file) => file.type === "file");

  const fileNames = files
    .filter((file) => file.type === "file")
    .map((file) => file.name);

  const result = { fileNames };

  return [result, false, null];
}
