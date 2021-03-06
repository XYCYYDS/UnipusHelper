# U艹(U++原作者弃坑)
## 2020-06-11 ```v5.1.0```
  - 自动答题功能修复
## 2020-06-14 ```v5.1.1```
  - 修复多选题自动答题功能
  - 优化代码结构
## 2020-06-14 ```v5.1.2```
  - 改名以修复每日更新次数检测失效

# UnipusHelper Old Version(a.k.a new U艹)
## 2020-10-20 ```v0.0.1```
- 重构

# UnipusHelper DanDan Version
## 2020-10-25 ```v1.0.0```
  - 正式发布

## 2020-10-26 ```v1.0.1```
### 修复
  - 修复单元测试BUG

## 2020-10-27 ```v1.1.0```
### 优化
- 优化答案解析速度，以及答案解析异常处理
### 新增
- 新增答案模块中标题可点击，显示或隐藏

## 2020-10-27 ```v1.1.1```
### 优化
- 优化插件隐藏方式，增加用户交流群

## 2020-10-27 ```v1.1.2```
- 由于选项乱序，删除了选项，请用户对应选项选择

# UnipusHelper
## 2020-10-28 ```v1.2.0```
- 与U艹合并，升级为U校园网课助手

## 2020-11-03 ```v1.2.1```
### 修复
- 通过动态导入，解决刷时长无效的问题
### 新增
- 使用前需要接受用户协议

## 2020-11-04 ```v1.2.2```
### 修复
- 提示等待单元测试加载完成的提示框，只有第一次进入单元测试才会弹出的问题
- 控制面板显示空白，且无法设置的问题
### 优化
- 普通练习，接口的响应时间
### 新增
- 每日检查一次脚本版本

## 2020-11-26 ```v1.3.0```
### 新增
- 适配chrome扩展
- 实现axios式request接口调用
### 修复与改进
- 打包时自动添加headers
- vue组件使用Pascal命名
- vue使用class装饰器重构
- 保存和重置按钮也使用自定义按钮
- 提取箭头旋钮为单独组件
- 提取折叠动画为单独组件，并应用slot
- global中的VERSION由package.json中的version导入，确保版本一致
- 对单元测试返回的响应做清理
- 对addMessage overload，适配单条消息和多条消息的处理
### 性能优化
- 优化架构

## 2020-11-27 ```v1.3.1```
### 新增
- 自动zip crx生成文件
### 修复与改进
- 修复版本查询异常

## 2020-11-30 ```v1.3.2```
### 新增
- 提供LITE版本
- 悬浮窗添加Github按钮
### 修复与改进
- 通过手动触发fetch，解决脚本初始化时，可能丢失请求的情况
- 解决油猴版setValue重复JSON.stringify问题
- 使用EnvironmentPlugin替代DefinePlugin

## 2020-12-04 ```v1.3.3```
### 新增
- 适配多页题
- 对无标答的多选题提供默认选项A
- 自动转换setting中通过input输入的值为指定类型
- 可以为时长设置指定章节数
### 修复与改进
- 时长跳转问题——开启循环刷课时，总是跳转到第一单元
- 增强对下拉选择题的解析

## 2021-01-01 ```v1.3.4```
### 新增
- 对未适配的练习题型，增加消息提示
- 提供单元测试的自动答题，并提供单题搜索
- 设置面板也可以拖动了
### 修复与改进
- 删除“使用说明”，“折扣群”按钮
- 修复单元测试的答案解析