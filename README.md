## 1.Numer grupy projektowej

## 2. Zdefiniowane wymagania funkcjonalne i niefunkcjonalne,

### Wymagania Funkcjonalne

1. Interfejs Użytkownika
   - Pasek nawigacji z odnośnikami do Sklepu, O nas, Wsparcia i Polityki Prywatności
   - Strona sklepu z karuzelą gier
   - Strona O nas z funkcjami platformy
   - Strona wsparcia z kategoriami pomocy
   - Strona polityki prywatności z możliwością zmiany języka

2. Funkcje Sklepu
   - Wyświetlanie polecanych gier w karuzeli
   - Pokazywanie tytułów i opisów gier
   - Wyświetlanie podglądów gier

3. System Wsparcia
   - Wyświetlanie sekcji popularnych produktów
   - Lista popularnych kategorii wsparcia
   - Opcje logowania
   - Wyświetlanie tematów pomocy

4. Sekcja O nas
   - Wyświetlanie funkcji platformy z ikonami
   - Szczegółowe opisy dla każdej funkcji
   - Przycisk instalacji

5. Polityka Prywatności
   - Obsługa wielu języków (angielski/polski)
   - Możliwość przełączania języka za pomocą flag
   - Wyświetlanie treści polityki

### Wymagania Niefunkcjonalne

1. Wydajność
   - Czas ładowania strony poniżej 2 sekund
   - Płynne przejścia między stronami
   - Zoptymalizowane ładowanie obrazów

2. Użyteczność
   - Responsywny design dla wszystkich rozmiarów ekranu
   - Intuicyjna nawigacja
   - Spójny interfejs UI/UX na wszystkich stronach
   - Dostępność dla użytkowników z niepełnosprawnościami

3. Kompatybilność
   - Wsparcie dla nowoczesnych przeglądarek (Chrome, Firefox, Safari, Edge)
   - Interfejs przyjazny urządzeniom mobilnym
   - Responsywny układ

4. Łatwość Utrzymania
   - Modularna struktura komponentów
   - Spójne standardy kodowania
   - Przejrzysta dokumentacja
   - Bezpieczeństwo typów TypeScript

6. Skalowalność
   - Możliwość ponownego użycia komponentów
   - Wydajne zarządzanie stanem
   - Modularna architektura

## 3. Dwie wybrane zasady projektowania uniwersalnego, które będą realizowane w tworzonej aplikacji,

<div style="background-color: #000000; color: #ffffff; padding: 15px; border-radius: 5px;">
<h1>Użyteczność dla osób o różnej sprawności</h1>
<h1>Zauważalna informacja</h1>
</div>

### 4 Zaprojektowane widoki aplikacji,

### 5. Opis wybranej technologii, która została wybrana do implementacji aplikacji - język programowania i środowisko.

Aplikacja została zaimplementowana przy użyciu następujących technologii:

#### Główne technologie:
- **React** (v18+) - biblioteka JavaScript do budowania interfejsów użytkownika
- **TypeScript** - typowany superset JavaScript zwiększający bezpieczeństwo kodu
- **React Router** (v6) - biblioteka do obsługi routingu w aplikacji React

#### Biblioteki UI i komponenty:
- **React Bootstrap** - framework CSS dostarczający gotowe komponenty UI
- **React Icons** - biblioteka ikon (BS*, Fa*)
- **Country Flag Icons** - biblioteka flag państw

#### Struktura projektu:
- Organizacja komponentów w folderze `src/components`
- Podział na strony w folderze `src/pages`
- Wykorzystanie CSS Modules do stylowania komponentów
- Typescript dla type safety i lepszej dokumentacji kodu

#### Środowisko deweloperskie:
- Node.js jako środowisko uruchomieniowe
- npm jako menedżer pakietów
- Create React App jako bundler i development server

Projekt wykorzystuje nowoczesne podejście do tworzenia aplikacji webowych, z naciskiem na:
- Komponentową architekturę
- Type safety dzięki TypeScript
- Modularność i reużywalność kodu
- Responsywność i dostępność