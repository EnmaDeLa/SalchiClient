import { AQUA, BOLD, GOLD, DARK_PURPLE, DARK_RED, GHAST_CLASS, GRAY, GREEN, MUSIC, RED, WHITE } from "../../utils/Constants";
import{ registerWhen } from "../../utils/RegisterTils";
import { setTitle } from "../../utils/Title";

/**
* Muestra cuando tirar la RAGNAROK en los dragones de M7
* */
registerWhen(
    register("chat", () => {
        setTitle(`${BOLD + GOLD}RAG!`, "", 10, 50, 10, 60);
    }).setCriteria(
        "[BOSS] Wither King: I no longer wish to fight, but I know that will not stop you."
    )
);