
Построить и вывести в виде web-страницы дерева n-ой вложенности.

Состав строк: название (стоимость)  
Данные: Приходит по rest api стек данных в формате json.  

Описание состава данных:
{
    "services": [
        {
            "id": int,
            "head": int,
            "name": str,
            "node": int,
            "price": float,
            "sorthead": int
        }
    ]
}

head = id вышележащего узла (null означает, что услуга находится в корневом узле)  
node = флаг “узел дерева” (1-узел, 0-лист)  
В рамках одного слоя нужно выводить строки в порядке возрастания показателя sorthead.  

### Описание функций

---
**createNode**  
&ensp; Создает узел дерева услуг: формирует элементы списка с названием услуги и ценой. Если услуга является узлом, то создает вложенное дерево рекурсивно.

**buildTree**  
&ensp; Рекурсивно строит и добавляет услуги к дереву на основе их связей и порядка 'sorthead'.

**showTree**  
&ensp; Отображает дерево услуг на веб-странице, вызывая функцию buildTree.

**toggleVisibility**  
&ensp; Отвечает за изменение видимости (скрытие/отображение) дочерних узлов в дереве.

### Скриншоты Web-приложения
---


![Начальная страница](https://github.com/maridu7889/test-task/raw/main/images/1.png)

![Страница, показывающая вложенность](https://github.com/maridu7889/test-task/raw/main/images/2.png)

![страница с выводом данных](https://github.com/maridu7889/test-task/raw/main/images/3(2).png)




  



