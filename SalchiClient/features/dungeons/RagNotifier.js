import settings from "../../settings";
import { GOLD } from "../../utils/constants";
import { UWU } from "../../utils/constants";
import { delay } from "../../utils/thread";
import { registerWhen } from "../../utils/variables";

cd = false;

registerWhen(register("chat", () =>{
    if (cd) return;

    Client.Companion.showTitle(`${GOLD}RAG!`, "", 0, 40, 10);
    UWU.play();
    cd = true;
    delay(() => cd = false, 1000);
}).setCriteria("[BOSS] Wither King: I no longer wish to fight, but I know that will not stop you."), () => settings.ragNotifier);