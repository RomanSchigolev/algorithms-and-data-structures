# Алгоритмы и структуры данных

```
TC - Time Complexity
SC - Space Complexity
```

**Структура данных** — это способ организации данных. В зависимости от того, какими данными мы хотим манипулировать и что с ними делать, — должны выбрать ту или иную структуру данных, которая идеально подходит для нашего случая.

**Алгоритм** — это последовательность действий, которая будет выполнена для достижения цели при манипулировании входными данными. Алгоритм может отличаться в зависимости от того, какую структуру данных мы выбираем. Почти всегда есть возможность решить проблему несколькими способами, применяя различные алгоритмы. Какие-то будут эффективными, а другие — неэффективными.

Именно поэтому крайне необходимо иметь возможность оценить эффективность алгоритма по сравнению с другими, чтобы точно определить, какой лучше. Эта оценка называется — **Сложность алгоритма**.

## Сложность алгоритма и Big O

**Сложность алгоритмов** — это оценка работы алгоритма. Используется для сравнения с другими, которые приводят к одному и тому же результату. В программировании важны два ключевых фактора сравнения — время и память.

В обоих случаях сложность зависит от входных данных: список из 10 клиентов отработает быстрее и займет меньше памяти, чем аналогичный из 100 000. Причем точное время никого не интересует: это зависит от языка программирования, типа данных, процессора и многого другого. Важна только сложность при стремлении размера входных данных к бесконечности (асимптотическая сложность) — то есть, как будет расти расход ресурсов (времени и памяти) с увеличением входных данных.

Следить за ростом и в сравнении расхода ресурсов поможет понятие «Big O» (О-нотация, как ее называют). О пришла в IT-мир из математики, но я на этом сейчас не буду останавливаться. Для нас достаточно сказать, что **Big O** — это описание верхнего возможного предела. Сейчас на примере объясню, что это значит.

## О(1) — Константная сложность (Constant)

**Алгоритм имеет О(1) сложность** — когда известно, сколько точно раз что-то произойдет, или сколько памяти будет выделено, независимо от изменения входных данных. То есть, алгоритм всегда будет использовать одинаковое количество ресурсов. Это наилучшая возможная сложность, к которой нужно стремиться.

## О(N) — Линейная сложность (Linear)

TC — количество итераций = количество элементов.

SC — если нужно создать массив из N элементов, то это будет O(N) SC.

## О(log N) — Логарифмическая сложность (Logarithmic)

Многие алгоритмы имеют логарифмическую сложность — бинарный поиск (Binary Search), поиск в сбалансированном бинарном дереве поиска (Balanced Binary Search Tree), и многих других. Причиной этого является его эффективность, которая намного лучше чем О(N).

Простой «lifehack», как понять, что алгоритм имеет O(logN) — когда на каждом шаге количество элементов уменьшается вдвое, то это скорее всего O(log N).

## О(N\*N) — Квадратичная сложность (Quadratic)

Это популярная сложность для некоторых алгоритмов сортировки и классическая при работе с матрицей (двумерный массив).

## О(NlogN) — Линейно-логарифмическая сложность (Linearithmic)

Эта сложность немного медленнее линейной, но значительно быстрее квадратичной. Применяется преимущественно в эффективных алгоритмах сортировки — слиянием (Mergesort), быстрая сортировка (Quicksort), другие.

## O(2^N) — Экспоненциальная сложность (Exponential)

Чаще всего алгоритмы с этой сложностью встречаются в рекурсии, динамическом программировании и т. д.

## O(N!) — Факториальная сложность (Factorial)

Факториал — это умножение всех целых чисел, больших 0 и не превышающих самих себя.

Например: `5! = 5*4*3*2*1 = 120.`

Как можно догадаться — очень стремительно растет.

![Все сложности алгоритмов](./images/algo-complexity.png "Графическое представление сложности алгоритмов")
