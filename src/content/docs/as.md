# Architekturális stílus

A projekthez választott architekturális stílusok az alábbiak:
- Event-driven architecture.
- Modular monolith.

## Miért két stílus?

A ChocoMarket (mint teljes rendszer) felbontható két, eltérő minőségi jellemzőkkel és ASR-ekkel rendelkező alrendszerre:

- A készletek beolvasását és feldolgozását végző rendszer.
- A készletek böngészését lehetővé tevő rendszer.

Annak érdekében, hogy a két rendszer követelményeit minél jobban kielégíthessük, elviseljük a két stílus egyidejű fenntartásából következő:

- magasabb költségeket,
- magasabb komplexitást,
- alacsonyabb karbantarthatóságot.

## Miért EDA?

### Illeszkedés

A ChocoMarket készletbeolvasó részének architekturális karakterisztikáihoz (bővíthetőség, interoperabilitás, alacsony késleltetés, skálázhatóság) remek választás az EDA, hiszen:

- Új beszállítók esetén könnyedén hozzáadhatók újfajta események, új feldolgozók.
- A meglevő eseményekre könnyen építhetünk új feldolgozási mechanizmusokat.
- Jól tud alkalmazkodni hatalmas mennyiségű bejövő adathoz is.

### Kompromisszumok

Nem szabad elfelejteni azonban az alábbiakat:

- Viszonylag magas költségek (ami problémás lehet egy állami projekt esetén).
- Tesztelhetőségi és karbantarthatósági aggályok (ami releváns, hiszen hosszú-hosszú évekig szeretnénk üzemeltetni a rendszert).

## Miért modular monolith?

### Illeszkedés

A ChocoMarket készletböngésző részével kapcsolatban nem jelenik meg semmilyen speciális követelmény, ezért priorizálhatunk olyan, általános jellemzőket, mint
- alacsony költség,
- egyszerűség,
- karbantarthatóság.

E minőségi jellemzőket nagyszerűen kielégíti a modular monolith architekturális stílus.

### Kompromisszumok

Ugyanakkor oda kell figyelnünk az alábbi kompromisszumokra:

- A világ minden tájáról számíthatunk látogatókra, e stílus azonban se a skálázhatóságról, se az elasztikusságról nem híres.
- Új funkcionalitás hozzáadásakor rendre elő fog kerülni az architekturális evolúció kérdése: például service-based architektúra bevezetése.
