import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function BookingForm() {
  const form = useForm()

  return(
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-2 gap-4 py-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Edward Odey" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

	<FormField 
          control={form.control}
	  name="phone"
	  render={({ field }) => (
            <FormItem>
	      <FormLabel>Your Phone</FormLabel>
	      <FormControl>
	        <Input placeholder="Ex: +234 70 468 692 57" {...field} />
	      </FormControl>
	      <FormDescription>We will contact you with this phone numebr.</FormDescription>
	      <FormMessage />
            </FormItem>
	  )}
	/>

	<FormField
          control={form.control}
	  name="Location"
	  render={({ field }) => (
	    <FormItem>
	      <FormLabel>Pick Up Location</FormLabel>
	      <FormControl>
	        <Input placeholder="Ex: Lugbe Zone9" />
	      </FormControl>
	      <FormDescription>This is your pickup location, like where we will come and pick you</FormDescription>
	      <FormMessage />
	    </FormItem>
	  )}
	/>

	<FormField
          control={form.control}
	  name="Location"
	  render={({ field }) => (
	    <FormItem>
	      <FormLabel>Pick Up Location</FormLabel>
	      <FormControl>
	        <Input placeholder="Ex: Lugbe Zone9" />
	      </FormControl>
	      <FormDescription>This is your pickup location, like where we will come and pick you</FormDescription>
	      <FormMessage />
	    </FormItem>
	  )}
	/>

	<FormField
          control={form.control}
	  name="Location"
	  render={({ field }) => (
	    <FormItem>
	      <FormLabel>Pick Up Location</FormLabel>
	      <FormControl>
	        <Input placeholder="Ex: Lugbe Zone9" />
	      </FormControl>
	      <FormDescription>This is your pickup location, like where we will come and pick you</FormDescription>
	      <FormMessage />
	    </FormItem>
	  )}
	/>

        <Button className="mt-5" type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default BookingForm
