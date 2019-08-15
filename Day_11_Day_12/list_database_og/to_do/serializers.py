from rest_framework import serializers
from to_do.models import ToDoList, ToDoListItems


class BlankToDoListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ToDoList
        fields = ['list_name']


class ToDoListItemSerializerAll(serializers.ModelSerializer):

    class Meta:
        model = ToDoListItems
        fields = '__all__'


class ToDoListSerializerAll(serializers.ModelSerializer):

    items = ToDoListItemSerializerAll(many=True)

    class Meta:
        model = ToDoList
        fields = '__all__'


class ToDoListItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = ToDoListItems
        fields = ['todo_task']


class ToDoListSerializer(serializers.ModelSerializer):

    items = ToDoListItemSerializer(many=True)

    class Meta:
        model = ToDoList
        fields = '__all__'

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        todo_list = ToDoList.objects.create(**validated_data)
        for item_data in items_data:
            item_data['todo_list_id'] = todo_list.id
            ToDoListItems.objects.create(**item_data)
        return todo_list

    def update(self, instance, validated_data):
        instance.title = validated_data['list_name']
        instance.save()

        # import pdb; pdb.set_trace()
        task_id = [item for item in validated_data['items']]
        for todo in instance.items.all():
            if todo.id not in task_id:
                todo.delete()

        for item in validated_data['items']:
            if 'id' in item:
                todo = ToDoListItems.objects.get(pk=id).update(
                    id=item['id'], text=item['todo_task'], todo_list=instance)
                todo.save()
            else:
                todo = ToDoListItems(
                    todo_task=item['todo_task'], todo_list=instance)
                todo.save()
        return instance

        # for item_data in items_data:
        #     updated_list = todo_list.pop(0)
        #     updated_list.todo_task = item_data.get('todo_task')
        #     updated_list.save()
        # return instance


# class ToDoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ToDo
#         fields = ['id', 'listitemcontent', 'listtaskuserid']
