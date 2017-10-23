class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){
  }

  markDone(){
    this.done = true;
  }
}


var tasks: Task[]=[];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Clean Room', 'High'));
tasks.push(new Task('Meal prep', 'low'));
console.log(tasks)

tasks[0].markDone();

  for(var task of tasks){
    console.log(task);
  }
