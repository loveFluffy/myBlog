import yaml
def yaml_loader(filepath):
	with open(filepath, "r") as file_descriptor:
		data = yaml.load(file_descriptor)
	return data

def yaml_dump(filepath,data):
	with open(filepath, "w") as file_descriptor:
		yaml.dump(data,file_descriptor)

if __name__ == '__main__':
	filepath = "test.yaml"
	data = yaml_loader(filepath)
	print(data)

	items = data.get('items')
	for item_name, item_value in items.iteritems():
		print(item_name, item_value)