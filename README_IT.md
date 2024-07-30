# Linee guida per l'addon di Mensa

## Regole di Implementazione
Per garantire la qualità e la coerenza del tuo addon, ti preghiamo di seguire le seguenti regole:

### Regole Generali
1. **Funzionalità:** Il tuo addon deve essere funzionale, senza bug o errori che lo rendano inutilizzabile.
2. **Webapp:** L'addon deve essere una webapp e verrà eseguito in una webview all'interno dell'app.
3. **Utilizzo del Server:** Se hai bisogno di un server, puoi utilizzare il Server Mensa (ulteriori dettagli sotto).
4. **Open Source:** L'addon deve essere open source e puoi scegliere qualsiasi licenza.
5. **Originalità:** Il tuo addon deve essere originale e non una copia di un altro addon.
6. **No Monetizzazione:** L'addon non deve mostrare annunci pubblicitari o qualsiasi forma di monetizzazione.
7. **No Tracking:** L'addon non deve includere alcun tipo di tracciamento o analisi.
8. **Contenuti Appropriati:** Il tema dell'addon non deve essere offensivo o inappropriato.
9. **File Metadata:** Deve essere presente un file `mensadata.json` (dettagli sotto).

### Regole UI
1. **Libertà di Design:** Sei libero di progettare l'interfaccia utente come preferisci, purché sia facile da usare.
2. **Responsività:** L'interfaccia utente deve essere responsiva e funzionare su qualsiasi dimensione dello schermo.
3. **Pulsante di Chiusura:** La prima pagina dell'interfaccia utente deve avere un pulsante che reindirizza a "https://svc.mensa.it/goback", che l'app utilizzerà per capire quando l'utente vuole chiudere il tuo addon.

## File `mensadata.json`
Il file `mensadata.json` contiene i metadati dell'addon. Deve essere raggiungibile alla radice dell'URL dell'addon (ad esempio, se il tuo addon è ospitato su `https://example.com/myaddon`, il file `mensadata.json` deve essere accessibile su `https://example.com/myaddon/mensadata.json`).

### Esempio di `mensadata.json`:
```json
{
  "id": "oakk7cnnzpi5wlo",
  "name": "Hello World",
  "description": "Questo è un addon di prova, inteso solo a scopo dimostrativo",
  "icon": "https://mensa-italia.github.io/mensa_app_addon/app_icon.png",
  "version": "1.0.0",
  "permissions": []
}
```

### Descrizione dei Campi:
- **id:** Un identificatore univoco per l'addon.
- **name:** Il nome dell'addon.
- **description:** Una breve descrizione dell'addon.
- **icon:** L'URL dell'icona dell'addon.
- **version:** La versione dell'addon.
- **permissions:** Un array di permessi di cui l'addon ha bisogno.

### Esempio Live:
[https://mensa-italia.github.io/mensa_app_addon/mensadata.json](https://mensa-italia.github.io/mensa_app_addon/mensadata.json)

## Server Mensa
Se scegli di utilizzare il Server Mensa per ospitare il tuo addon, segui queste regole aggiuntive:
1. **Database:** Utilizza sqlite se il tuo addon richiede un database.
2. **Utilizzo del Server:** Il server è solo per ospitare il tuo addon.
3. **Efficienza delle Risorse:** Utilizza soluzioni che non richiedono molte risorse.
4. **Pronto per Docker:** L'addon deve essere pronto per Docker per una facile distribuzione.
5. **Immagine Docker Singola:** L'addon deve essere una singola immagine Docker; non eseguiremo più container per un singolo addon.

## Come Inviare il Tuo Addon
Segui questi passaggi per inviare il tuo addon:
1. **Pubblica su GitHub:** Pubblica il tuo addon su GitHub.
2. **Crea un Issue:** Crea un nuovo issue su questo repository con il titolo "Addon submission: [Nome dell'Addon]".
3. **Fornisci Dettagli:** Nella descrizione dell'issue, fornisci il link al repository GitHub del tuo addon.
4. **Dettagli del Server (se necessario):** Se hai bisogno di un server, costruisci il tuo addon come immagine Docker utilizzando GitHub Actions in modo che possiamo accedervi direttamente dal GitHub Container Registry. Se hai già un server, fornisci il link al server nella descrizione dell'issue.

## Flusso di Approvazione
Una volta inviato il tuo addon, lo esamineremo e decideremo se può essere aggiunto all'app:
1. **Approvazione:** Se il tuo addon viene approvato, lo aggiungeremo all'app e chiuderemo l'issue.
2. **Rifiuto:** Se il tuo addon viene rifiutato, chiuderemo l'issue e forniremo il motivo del rifiuto. Potrai quindi correggere i problemi e inviarlo nuovamente.

## Nota
Prima di iniziare a sviluppare il tuo addon, puoi contattarci per chiedere se può superare il processo di approvazione. In questo modo, eviterai di sviluppare un addon che potrebbe non essere approvato.