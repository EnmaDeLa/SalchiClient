register("command", () => {
    ChatLib.chat(
        `\n§6§lSalchiDebug:
        §eCT Version: §7v${ChatTriggers.MODVERSION}
        §eSalchiClient Version: §7v${JSON.parse(FileLib.read("SalchiClient", "metadata.json")).version}
        §8Este modulo no servira si no tiene el CT actualizado :P`
    );
}).setName("SCTest");

// Dungeon Features
import "./features/dungeon/RagNotifier";