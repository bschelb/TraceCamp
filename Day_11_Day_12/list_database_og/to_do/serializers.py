from rest_framework import serializers
from to_do.models import ToDoList, ToDoListItems

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
        items_data = validated_data.pop('items')
        todo_list = (instance.items).all()
        todo_list = list(todo_list)
        instance.list_name = validated_data.get('list_name', instance.list_name)

        for item_data in items_data:
            updated_list = todo_list.pop(0)
            updated_list.todo_task = item_data.get('todo_task')
            updated_list.save()
        return instance











    

# class ToDoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ToDo
#         fields = ['id', 'listitemcontent', 'listtaskuserid']