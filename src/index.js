
// Importujemy potrzebne biblioteki
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// Dodajemy odpowiednie plugins, które pozwolą na
// prawidłowe wykorzystanie stref czasowych oraz
// funkcji formatowania daty
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(customParseFormat);

// Ustawiamy przykładowy format daty i czasu
const DATE_TIME_FORMAT = 'MM/DD/YY H:mm:ss A Z';
// Ustawiamy przykładową strefę czasową
const NEW_YORK_TIMEZONE = 'America/New_York';

// Kiedy chcesz dodać do daty określoną ilośc czasu, wykonaj
// następujące kroki:

// Przygotuj lub pobierz datę z określoną strefą czasową
// Dla konkretnej daty strefę czasową ustawiamy poprzez
// wywołanie funkcji tz i podanie nazwy strefy czasowej.
// Ustawiamy strefę czasową dla aktualnej daty i czasu
const d1 = dayjs().tz(NEW_YORK_TIMEZONE);
console.log(d1.format(DATE_TIME_FORMAT));
// Dokonujemy konwersji daty i czasu do formatu UTC
const d1UTC = d1.utc();
// Do daty w formacie UTC dodajemy określoną ilość czasu
// np. 5 miesięcy
const d2UTC = d1UTC.add(5, 'month');
// Datę po konwersji ponownie konwertujemy do wybranej strefy
// czasowej
const d2 = d2UTC.tz(NEW_YORK_TIMEZONE);
// Dzięki powyższym krokom modyfikowanie daty ze strefą czasową
// zawsze uwzględni wszelkie ustalenia administracyjne np.
// czas letni / zimowy
console.log(d2.format(DATE_TIME_FORMAT));
