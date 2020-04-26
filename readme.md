## Installazione

1. Copiare il la cartella `controls/com.888sp.tabstrip` dentro la cartella `html` di Omnis
2. Copiare il bundle dentro la cartella `html/script` di Omnis
3. Includere il bundle nella pagina template di Omnis

## Utilizzo

Definire il dataname del componente come una lista:

-   `id` identificativo del tab
-   `titolo` label visualizzata
-   `activeColor` opzionale, codice esadecimale (con `#`) da utilizzare quando il tab è attivo. Se non viene specificato viene usato quello generico
-   `canClose` opzionale, specifica se visualizzare o meno il pulsante per chiudere il tab. Per funzionare la tabstrip deve avere la proprietà `$canclose` a `kTrue`

Esempio di definizione del dataname:

```
Do ilTabs.$define()
Do ilTabs.$cols.$add('id';kInteger;k32bitint)
Do ilTabs.$cols.$add('title';kCharacter;kSimplechar)
Do ilTabs.$cols.$add('activeColor';kCharacter;kSimplechar)
Do ilTabs.$cols.$add('canClose';kBoolean)
Do ilTabs.$add(1;'A1 - Navigataor';'#99CCCC';kFalse)
Do ilTabs.$add(2;'A2 - Dashboard';'#33CC33';kFalse)
Do ilTabs.$add(3;'A3 - Scheda 1';;kTrue)
Do ilTabs.$add(4;'A4 - Scheda 2';;kTrue)
Calculate ilTabs.$line as 3
```
