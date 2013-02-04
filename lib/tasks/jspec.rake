begin
  require 'guard/jasmine/task'

  Guard::JasmineTask.new(:jspec)
rescue LoadError => e
  namespace :guard do
    task :jspec do
      raise "guard:jspec cannot be run without the guard and jasmine gems"
    end
  end
end
