/*
 * @Author: Mr.Cong Wei
 * @Date: 2022-10-31 20:48:25
 * @LastEditTime: 2022-11-02 20:30:55
 */
/**
 * 
|         *upperCase*         | *flag* |   *notes*    |         *lowerCase*         |
| :-------------------------: | :----: | :----------: | :-------------------------: |
|           ELEMENT           |   1    |     元素     |           element           |
|    FUNCTIONAL_COMPONENT     |   2    |   函数组件   |    functional_component     |
|     STATEFUL_COMPONENT      |   4    |   状态组件   |     stateful_component      |
|        TEXT_CHILDREN        |   8    |   文本节点   |        text_children        |
|       ARRAY_CHILDREN        |   16   |   数组节点   |       array_children        |
|       SLOTS_CHILDREN        |   32   |   solt节点   |       slots_children        |
|          TELEPORT           |   64   | teleport组件 |          teleport           |
|          SUSPENSE           |  128   | suspense组件 |          suspense           |
| COMPONENT_SHOULD_KEEP_ALIVE |  256   |   缓存组件   | component_should_keep_alive |
|    COMPONENT_KEPT_ALIVE     |  521   |   保持活力   |    component_kept_alive     |
|          COMPONENT          |  2|4 = 6  |     组件     |          component          |
 */
export const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
