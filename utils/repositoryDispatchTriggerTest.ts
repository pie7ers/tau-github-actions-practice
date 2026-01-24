import { CONSTS } from "./envs";
import axios from "axios";
import getGithubToken from "./getToken";

(async function (): Promise<void> {
  const USER = CONSTS.TEST_REPO_OWNER;
  const REPO = CONSTS.TEST_REPO;
  const url = `https://api.github.com/repos/${USER}/${REPO}/dispatches`;
  const data = {
    event_type: "trigger-tests",
    client_payload: {
      env: "test",
      version: "1.2.3",
      trigger_by: USER,
    },
  };
  const headers = {
    Authorization: `Bearer ${await getGithubToken()}`,
  };

  const res = await axios({
    method: "POST",
    url: url,
    data: data,
    headers: headers,
  });

  console.log({
    status: res.status,
    statusText: res.statusText,
    data: res?.data,
  });

  if (res.status !== 204) {
    const body = res.data;
    throw new Error(`${res.status} ${res.statusText} - ${body}`);
  }
})();
