import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FieldComponentProps {
  label: string;
  value: string;
  type?: 'text' | 'password' | 'list';
  onSave: (newValue: string) => void;
  className?: string;
  isEditable?: boolean;
}

const FieldComponent = ({
  label,
  value,
  type,
  onSave,
  className,
  isEditable = true,
}: FieldComponentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleSave = () => {
    onSave(newValue);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex flex-row md:items-center gap-2 justify-between w-full ${className}`}
    >
      <label className="text-lg font-bold w-1/4">{label}</label>

      <div className="flex items-center justify-between ml-5 md:ml-0 gap-4 w-3/4">
        <div className="flex-grow">
          {isEditing ? (
            type === 'list' ? (
              <></>
            ) : (
              <Input
                value={newValue}
                type={type ?? 'text'}
                onChange={e => setNewValue(e.target.value)}
                className="w-full border border-black rounded-2xl h-10"
              />
            )
          ) : (
            <span className={type === 'password' ? 'text-gray-500' : ''}>
              {type === 'password' ? '*****' : newValue}
            </span>
          )}
        </div>

        <div className="shrink-0">
          {isEditable ? (
            <Button
              size="sm"
              variant="ghost"
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              className="text-sm"
            >
              {isEditing ? 'Зберегти' : 'Редагувати'}
            </Button>
          ) : (
            // Порожнє місце для вирівнювання
            <div className="w-[90px]"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FieldComponent;
