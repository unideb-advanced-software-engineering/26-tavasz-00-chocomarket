# Architekturálisan szignifikáns követelmények

## ZDR általános követelmények

### Takarékosság

Zamunda nem szegény ország, de feleslegesen nem is akarja szórni a pénzt: a projektek tervezésénél törekedni kell a takarékosságra. Szintén ezt igénylik a klímabarát célok!

## Minőségi jellemzők

Az előzőleg azonosított [architekturális karakterisztikának](./ac.md) tekinthető minőségi attribútumok az alábbiak:
- Bővíthetőség.
- Interoperabilitás.
- Skálázhatóság.
- Alacsony késleltetés.

## Szignifikáns funkcionális követelmények

### F-KB-04

A rendszerhez hozzáadhatók egyedi integrációk, ha a konzerv FTP/HTTP/stb. megoldások nem konfigurálhatók egyszerűen.

**Miért ASR?**
- Sok ilyen egyedi integráció lehet, és ezeket hatékonyan kell kezelnünk. Mind a fejlesztési, mind a futási oldalról.
- Az egyedi integrációknak hibatűrőnek és üzembiztosnak kell lenniük. Ha valami baj van, nem ránthatják magukkal a rendszert.
- Érdekes lenne olyanokat megvizsgálni, mint az integrációs kódok generálása MI-vel. Ebben segít, ha az integrációk izolált egységek.

## Szervezeti tapasztalat, preferenciák

### Kafka

A szervezetünk kiterjedt [Kafka](https://kafka.apache.org/)-tapasztalattal rendelkezik, melyet érdemes lehet kihasználni ebben a projektben, szemben más, hasonló technológiákkal.
