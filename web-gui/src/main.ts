import { Router } from "./router/router.ts";
import { TarkovClient } from "./services/tarkov-client.ts";
import "./style.css";

Router.getInstance<Router>();
TarkovClient.getInstance<TarkovClient>();